import AuthIllustration from './AuthIllustration'
import AuthContent from './AuthContent'
import ProjectLogo from './ProjectLogo'

const AuthContainer = ({ currentPage, switchToLogin, switchToSignup, onLoginSuccess, isDark, toggleTheme }) => {
  const handleLoginSuccess = (userType) => {
    if (onLoginSuccess) {
      onLoginSuccess(userType);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <ProjectLogo />

      <div className="flex-1 flex">
        <div className="hidden lg:flex lg:w-1/2">
          <AuthIllustration currentPage={currentPage} />
        </div>
        
        <div className="w-full lg:w-1/2 flex">
          <AuthContent
            currentPage={currentPage}
            switchToLogin={switchToLogin}
            switchToSignup={switchToSignup}
            onLoginSuccess={handleLoginSuccess}
          />
        </div>
      </div>
    </div>
  )
}

export default AuthContainer

