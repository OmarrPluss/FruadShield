import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExportButton = ({ targetRef, filename = 'dashboard-report', title = 'Dashboard Report' }) => {
  const exportToPDF = async () => {
    if (!targetRef.current) return;
    
    // Show loading state
    const button = document.getElementById('export-button');
    const originalContent = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exporting...';
    button.disabled = true;
    
    try {
      // Create a new PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Add title
      pdf.setFontSize(18);
      pdf.setTextColor(40, 40, 40);
      pdf.text(title, pageWidth / 2, 15, { align: 'center' });
      
      // Add date
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      pdf.text(`Generated on ${date}`, pageWidth / 2, 22, { align: 'center' });
      
      // Get all chart containers
      const chartContainers = targetRef.current.querySelectorAll('.chart-container');
      let yOffset = 30; // Start position after title and date
      
      // Process each chart
      for (let i = 0; i < chartContainers.length; i++) {
        const container = chartContainers[i];
        
        // Find the chart title
        let chartTitle = '';
        const titleElement = container.closest('.card')?.querySelector('.card-title');
        if (titleElement) {
          chartTitle = titleElement.textContent.trim();
        }
        
        // Capture the chart as canvas
        const canvas = await html2canvas(container, {
          scale: 2,
          backgroundColor: '#25253A',
          logging: false
        });
        
        // Convert canvas to image
        const imgData = canvas.toDataURL('image/png');
        
        // Calculate image dimensions to fit page width while maintaining aspect ratio
        const imgWidth = pageWidth - 40; // 20mm margin on each side
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // Check if we need a new page
        if (yOffset + imgHeight + 15 > pageHeight) {
          pdf.addPage();
          yOffset = 20;
        }
        
        // Add chart title
        if (chartTitle) {
          pdf.setFontSize(12);
          pdf.setTextColor(60, 60, 60);
          pdf.text(chartTitle, 20, yOffset);
          yOffset += 8;
        }
        
        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 20, yOffset, imgWidth, imgHeight);
        yOffset += imgHeight + 15; // Add space after image
      }
      
      // Save the PDF
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      // Restore button state
      button.innerHTML = originalContent;
      button.disabled = false;
    }
  };
  
  return (
    <button 
      id="export-button"
      className="bg-white bg-opacity-5 border border-divider-color text-text-light py-2 px-3 rounded-md flex items-center gap-2 hover:bg-opacity-10 transition-all duration-300"
      onClick={exportToPDF}
    >
      <FontAwesomeIcon icon="file-pdf" />
      <span>Export Report</span>
    </button>
  );
};

export default ExportButton;
