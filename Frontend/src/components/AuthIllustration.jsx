import { CheckCircle } from 'lucide-react'

const AuthIllustration = ({ currentPage }) => {
  const isSignup = currentPage === 'signup'
  
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-600 to-indigo-800 hidden lg:flex p-10 text-white flex-col justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-white/10 to-transparent"></div>
      
      <div className="relative z-10">
        <img 
          src={isSignup 
            ? "https://illustrations.popsy.co/amber/secure-server.svg" 
            : "https://illustrations.popsy.co/amber/digital-nomad.svg"
          } 
          alt="Security Illustration"
          className="max-w-full h-auto mb-8"
        />
        
        <h2 className="text-3xl mb-4 font-semibold">
          {isSignup ? "Advanced Fraud Protection" : "Welcome Back"}
        </h2>
        
        <p className="opacity-90 leading-relaxed">
          {isSignup 
            ? "Secure your business with our AI-powered fraud detection system that monitors transactions in real-time."
            : "Access your FraudShield dashboard to monitor your security status and recent activities."
          }
        </p>
        
        <div className="flex flex-wrap gap-4 mt-auto pt-8">
          {isSignup ? (
            <>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Real-time monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Machine learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>End-to-end encryption</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Two-factor authentication</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Activity monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Instant alerts</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthIllustration

