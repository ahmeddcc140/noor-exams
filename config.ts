export const config = {
  app: {
    name: 'نور للاختبارات الإلكترونية',
    version: '1.0.0',
    defaultLanguage: 'ar',
    supportedLanguages: ['ar', 'en'],
  },
  security: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: '24h',
    bcryptSaltRounds: 10,
    sessionTimeout: 3600, // 1 hour
  },
  database: {
    url: process.env.MONGODB_URI,
    name: 'noor_exams',
  },
  email: {
    from: 'no-reply@noor-exams.com',
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  },
  roles: {
    ADMIN: 'admin',
    TEACHER: 'teacher',
    STUDENT: 'student',
  },
  examSettings: {
    defaultDuration: 60, // minutes
    minQuestions: 5,
    maxQuestions: 100,
    allowRetake: false,
    showResults: true,
  },
};