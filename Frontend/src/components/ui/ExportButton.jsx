import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import GlobalButton from './GlobalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExportButton = ({ targetRef, filename = 'dashboard-report', title = 'Dashboard Report' }) => {
  const [loading, setLoading] = useState(false);

  const exportToPDF = async () => {
    if (!targetRef.current) return;
    setLoading(true);
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.setFontSize(18);
      pdf.setTextColor(40, 40, 40);
      pdf.text(title, pageWidth / 2, 15, { align: 'center' });
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      pdf.text(`Generated on ${date}`, pageWidth / 2, 22, { align: 'center' });
      const chartContainers = targetRef.current.querySelectorAll('.chart-container');
      let yOffset = 30;
      for (let i = 0; i < chartContainers.length; i++) {
        const container = chartContainers[i];
        let chartTitle = '';
        const titleElement = container.closest('.card')?.querySelector('.card-title');
        if (titleElement) {
          chartTitle = titleElement.textContent.trim();
        }
        const canvas = await html2canvas(container, {
          scale: 2,
          backgroundColor: '#25253A',
          logging: false
        });
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pageWidth - 40;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        if (yOffset + imgHeight + 15 > pageHeight) {
          pdf.addPage();
          yOffset = 20;
        }
        if (chartTitle) {
          pdf.setFontSize(12);
          pdf.setTextColor(60, 60, 60);
          pdf.text(chartTitle, 20, yOffset);
          yOffset += 8;
        }
        pdf.addImage(imgData, 'PNG', 20, yOffset, imgWidth, imgHeight);
        yOffset += imgHeight + 15;
      }
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalButton
      title={loading ? 'Exporting...' : 'Export Report'}
      icon={loading ? 'spinner' : 'file-pdf'}
      onClick={exportToPDF}
      width={undefined}
      disabled={loading}
      spin={loading}
    />
  );
};

export default ExportButton;
