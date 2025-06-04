import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, AlertCircle, CheckCircle, XCircle, Eye } from "lucide-react";

export const XAIInsights = () => {
  const predictions = [
    {
      id: "TXN-2024-001",
      amount: "$2,450.00",
      riskScore: 0.92,
      prediction: "HIGH_RISK",
      confidence: 0.87,
      factors: [
        { factor: "Unusual transaction amount", impact: 0.35, type: "negative" },
        { factor: "Off-hours transaction", impact: 0.28, type: "negative" },
        { factor: "New merchant category", impact: 0.24, type: "negative" },
        { factor: "Regular customer", impact: -0.15, type: "positive" }
      ]
    },
    {
      id: "TXN-2024-002",
      amount: "$89.99",
      riskScore: 0.15,
      prediction: "LOW_RISK",
      confidence: 0.94,
      factors: [
        { factor: "Frequent merchant", impact: -0.45, type: "positive" },
        { factor: "Normal transaction time", impact: -0.30, type: "positive" },
        { factor: "Typical amount range", impact: -0.25, type: "positive" }
      ]
    },
    {
      id: "TXN-2024-003",
      amount: "$1,299.00",
      riskScore: 0.68,
      prediction: "MEDIUM_RISK",
      confidence: 0.73,
      factors: [
        { factor: "Higher than usual amount", impact: 0.40, type: "negative" },
        { factor: "New location detected", impact: 0.35, type: "negative" },
        { factor: "Established customer", impact: -0.25, type: "positive" },
        { factor: "Known device", impact: -0.18, type: "positive" }
      ]
    }
  ];

  const getPredictionColor = (prediction) => {
    switch(prediction) {
      case "HIGH_RISK": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "MEDIUM_RISK": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "LOW_RISK": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const getPredictionIcon = (prediction) => {
    switch(prediction) {
      case "HIGH_RISK": return <XCircle className="w-4 h-4" />;
      case "MEDIUM_RISK": return <AlertCircle className="w-4 h-4" />;
      case "LOW_RISK": return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getFactorColor = (type) => {
    return type === "positive" ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Explainable AI Insights</h2>
          <p className="text-slate-400">Understanding model decisions and prediction factors</p>
        </div>
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
          <Eye className="w-3 h-3 mr-1" />
          XAI Enabled
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {predictions.map((prediction) => (
          <Card key={prediction.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-lg">{prediction.id}</CardTitle>
                <Badge className={`${getPredictionColor(prediction.prediction)} border flex items-center gap-1`}>
                  {getPredictionIcon(prediction.prediction)}
                  {prediction.prediction.replace('_', ' ')}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Amount: <span className="text-white">{prediction.amount}</span></span>
                <span className="text-slate-400">Risk: <span className="text-white">{(prediction.riskScore * 100).toFixed(1)}%</span></span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Confidence</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-400 h-2 rounded-full" 
                        style={{ width: `${prediction.confidence * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-sm">{(prediction.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 font-medium">Contributing Factors</span>
                  </div>
                  <div className="space-y-2">
                    {prediction.factors.map((factor, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                        <span className="text-slate-300 text-sm">{factor.factor}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium ${getFactorColor(factor.type)}`}>
                            {factor.impact > 0 ? '+' : ''}{(factor.impact * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Model Interpretation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">87%</div>
              <div className="text-slate-400 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">92%</div>
              <div className="text-slate-400 text-sm">Model Confidence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">47</div>
              <div className="text-slate-400 text-sm">Feature Variables</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
