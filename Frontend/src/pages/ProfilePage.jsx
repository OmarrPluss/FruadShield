import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@fraudwatch.com',
    phone: '+1 (555) 123-4567',
    jobTitle: 'Fraud Analyst',
    department: 'Security Operations',
    location: 'San Francisco, CA',
    bio: 'Experienced fraud analyst with 5+ years in financial security and risk management.',
    avatar: null
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data if needed
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-light)' }}>
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile</h1>
          <p className="text-muted">Manage your personal information and preferences</p>
        </div>

        {/* Profile Card */}
        <div 
          className="rounded-lg shadow-lg p-8 mb-6"
          style={{ backgroundColor: 'var(--card-color)' }}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-primary-accent flex items-center justify-center text-white text-2xl font-bold">
                {profileData.firstName[0]}{profileData.lastName[0]}
              </div>
              
              {/* Basic Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-muted mb-1">{profileData.jobTitle}</p>
                <p className="text-muted">{profileData.department}</p>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 rounded-lg transition-colors duration-200"
              style={{ 
                backgroundColor: isEditing ? 'var(--danger-accent)' : 'var(--primary-accent)',
                color: 'white'
              }}
            >
              <FontAwesomeIcon icon={isEditing ? 'times' : 'edit'} className="mr-2" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Work Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Work Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Job Title</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.jobTitle}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Department</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.department}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                      style={{ 
                        backgroundColor: 'var(--bg-color)',
                        borderColor: 'var(--divider-color)',
                        color: 'var(--text-light)'
                      }}
                    />
                  ) : (
                    <p className="text-muted">{profileData.location}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            {isEditing ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                style={{ 
                  backgroundColor: 'var(--bg-color)',
                  borderColor: 'var(--divider-color)',
                  color: 'var(--text-light)'
                }}
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p className="text-muted">{profileData.bio}</p>
            )}
          </div>

          {/* Save/Cancel Buttons */}
          {isEditing && (
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-lg text-white transition-colors duration-200"
                style={{ backgroundColor: 'var(--success-accent)' }}
              >
                <FontAwesomeIcon icon="save" className="mr-2" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 rounded-lg transition-colors duration-200"
                style={{ 
                  backgroundColor: 'var(--bg-color)',
                  borderColor: 'var(--divider-color)',
                  color: 'var(--text-muted)'
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Security Settings */}
        <div 
          className="rounded-lg shadow-lg p-6"
          style={{ backgroundColor: 'var(--card-color)' }}
        >
          <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Change Password</h4>
                <p className="text-sm text-muted">Update your account password</p>
              </div>
              <button
                className="px-4 py-2 rounded-lg transition-colors duration-200"
                style={{ 
                  backgroundColor: 'var(--primary-accent)',
                  color: 'white'
                }}
              >
                Change Password
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-muted">Add an extra layer of security</p>
              </div>
              <button
                className="px-4 py-2 rounded-lg transition-colors duration-200"
                style={{ 
                  backgroundColor: 'var(--success-accent)',
                  color: 'white'
                }}
              >
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

