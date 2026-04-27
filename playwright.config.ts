import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,   //30000 ms(30 secs)
  testDir: './tests',
  fullyParallel: false,
  retries:1,
 globalSetup: './global-setup',
  workers: 1,

  reporter: [
    ['html',{outputfile:'../reports/htmlReport'}],
    ['allure-playwright',{outputfile:'../allure-results'}],
    ['dot'],
    ['list']
  ],

  use: {
    baseURL: 'https://rahulshettyacademy.com/client/',
   // storageState: './auth.json',   
    headless: false,
    trace: 'on-first-retry',
  
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
   
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests
  },

  //grep: /@master/,

  projects: [
   {
      name: 'chromium',
      
      use: { ...devices['Desktop Chrome']
       
      },
    }
    
  ],


});
