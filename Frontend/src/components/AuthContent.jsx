import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'

// Sample login credentials for different user types
const SAMPLE_CREDENTIALS = {
  'admin@fraudwatch.com': { password: 'admin123', userType: 'admin' },
  'manager@fraudwatch.com': { password: 'manager123', userType: 'manager' },
  'client@fraudwatch.com': { password: 'client123', userType: 'client' },
  'analyst@fraudwatch.com': { password: 'analyst123', userType: 'analyst' }
}

const AuthContent = ({ currentPage, switchToLogin, switchToSignup, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    loginEmail: '',
    loginPassword: ''
  })
  const [errors, setErrors] = useState({})

  const isSignup = currentPage === 'signup'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (isSignup) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
      if (!formData.password) newErrors.password = 'Password is required'
      else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    } else {
      if (!formData.loginEmail.trim()) newErrors.loginEmail = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.loginEmail)) newErrors.loginEmail = 'Email is invalid'
      if (!formData.loginPassword) newErrors.loginPassword = 'Password is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      
      if (isSignup) {
        // For signup, default to admin user type
        console.log('Signup successful:', formData)
        if (onLoginSuccess) {
          onLoginSuccess('admin');
        }
      } else {
        // For login, check credentials and determine user type
        const credentials = SAMPLE_CREDENTIALS[formData.loginEmail]
        if (credentials && credentials.password === formData.loginPassword) {
          console.log('Login successful:', { email: formData.loginEmail, userType: credentials.userType })
          if (onLoginSuccess) {
            onLoginSuccess(credentials.userType);
          }
        } else {
          setErrors({ loginEmail: 'Invalid email or password' })
        }
      }
    }, 2000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex-1 px-10 py-16 flex flex-col justify-center animate-fadeIn">
      <h1 className="text-3xl mb-2.5 text-indigo-600 dark:text-indigo-400 font-bold">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        {isSignup 
          ? "Secure your business with FraudShield's advanced protection"
          : "Sign in to your FraudShield account"
        }
      </p>

      {/* Sample Credentials Display for Login */}
      {!isSignup && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Sample Login Credentials:</h3>
          <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <div><strong>Admin:</strong> admin@fraudwatch.com / admin123</div>
            <div><strong>Manager:</strong> manager@fraudwatch.com / manager123</div>
            <div><strong>Client:</strong> client@fraudwatch.com / client123</div>
            <div><strong>Analyst:</strong> analyst@fraudwatch.com / analyst123</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {isSignup ? (
          <>
            {/* Signup Form */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-colors duration-300"
                placeholder="John Doe"
                required
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-colors duration-300"
                placeholder="you@example.com"
                required
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-colors duration-300"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>

            <div>
              <label htmlFor="company" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-colors duration-300"
                placeholder="Your company name"
              />
            </div>
          </>
        ) : (
          <>
            {/* Login Form */}
            <div>
              <label htmlFor="loginEmail" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">
                Email Address
              </label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                value={formData.loginEmail}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-colors duration-300"
                placeholder="you@example.com"
                required
              />
              {errors.loginEmail && <div className="text-red-500 text-sm mt-1">{errors.loginEmail}</div>}
            </div>

            <div>
              <label htmlFor="loginPassword" className="block mb-2 font-medium text-gray-800 dark:text-gray-100">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="loginPassword"
                  name="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-colors duration-300"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.loginPassword && <div className="text-red-500 text-sm mt-1">{errors.loginPassword}</div>}
            </div>
          </>
        )}

        <div className="mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full relative overflow-hidden
              backdrop-blur-md bg-indigo-500/20 border border-indigo-400/30
              text-white font-medium text-base cursor-pointer
              transition-all duration-300 ease-in-out rounded-lg p-3
              flex items-center justify-center
              hover:bg-indigo-500/30 hover:border-indigo-400/50 hover:shadow-lg
              hover:shadow-indigo-500/25 hover:-translate-y-0.5
              active:translate-y-0 active:shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              before:absolute before:inset-0 before:bg-gradient-to-r 
              before:from-transparent before:via-white/10 before:to-transparent
              before:translate-x-[-100%] hover:before:translate-x-[100%]
              before:transition-transform before:duration-700
            "
          >
            <span className="relative z-10">{isLoading ? 'Processing...' : (isSignup ? 'Create Account' : 'Sign In')}</span>
            {isLoading && (
              <div className="ml-2 w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
            )}
          </button>
        </div>
      </form>

      <div className="flex items-center my-5 text-gray-500 dark:text-gray-400 text-sm">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 mx-2.5"></div>
        <span>or</span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 mx-2.5"></div>
      </div>

      <button className="
        w-full relative overflow-hidden
        backdrop-blur-md bg-white/10 border border-white/20
        text-gray-800 dark:text-gray-100 font-medium text-base cursor-pointer
        transition-all duration-300 ease-in-out rounded-lg p-3
        flex items-center justify-center gap-2
        hover:bg-white/20 hover:border-white/30 hover:shadow-lg
        hover:shadow-white/25 hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/5 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%]
        before:transition-transform before:duration-700
      ">
        <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="relative z-10">{isSignup ? 'Sign up with Google' : 'Sign in with Google'}</span>
      </button>

      <p className="text-center mt-5 text-gray-500 dark:text-gray-400">
        {isSignup ? 'Already have an account? ' : "Don't have an account? "}
        <button
          onClick={isSignup ? switchToLogin : switchToSignup}
          className="text-indigo-600 dark:text-indigo-400 no-underline font-medium hover:underline cursor-pointer bg-transparent border-none"
        >
          {isSignup ? 'Log in' : 'Sign up'}
        </button>
      </p>

      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mt-5">
        <Lock className="w-4 h-4" />
        <span>Your data is securely encrypted</span>
      </div>

      {isSignup && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-5 text-center">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-indigo-600 dark:text-indigo-400 no-underline hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-indigo-600 dark:text-indigo-400 no-underline hover:underline">
            Privacy Policy
          </a>
        </div>
      )}
    </div>
  )
}

export default AuthContent

