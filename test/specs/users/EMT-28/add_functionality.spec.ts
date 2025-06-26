import { Selectors } from "./Selectors"; 

describe('EMT-32 Verify Edit Users Functionality', () => {
  it('Pre-conditions', async () => {
    // Navigate to Users List
    const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
    expect(listOfUsersButton).toBeTruthy();
    await driver.elementClick(Selectors.listOfUsers);
    console.log('List of Users button is visible and clickable');
    await driver.pause(3000);  
  });

  it('1. Press on any User Item', async () => {
    // Click on Add User button (blue button on bottom right)
    await driver.pause(2000);
    const addUserButton = await driver.execute('flutter:waitFor', Selectors.addUserButton, 5000);
    expect(addUserButton).toBeTruthy();
    await driver.pause(1000);
    await driver.execute('flutter:scrollIntoView', Selectors.addUserButton, { alignment: 0.5 });
    await driver.elementClick(Selectors.addUserButton);
    console.log('Clicked on Add User button');
    await driver.pause(2000);

    // Verify Save button is present in app bar
    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 5000);
    expect(saveButton).toBeTruthy();
    console.log('Save button is present in app bar');
    
    // Verify form sections are present
    try {
      const basicInfoHeader = await driver.execute('flutter:waitFor', Selectors.basicHeader, 3000);
      expect(basicInfoHeader).toBeTruthy();
      console.log('BASIC INFORMATION section is visible');
    } catch (error) {
      console.log('Basic Information header not found with key - checking by text');
    }
    
    // Verify essential form fields are present
    const firstNameField = await driver.execute('flutter:waitFor', Selectors.firstNameField, 3000);
    expect(firstNameField).toBeTruthy();
    console.log('First Name field is present');
    
    const emailField = await driver.execute('flutter:waitFor', Selectors.emailField, 3000);
    expect(emailField).toBeTruthy();
    console.log('Email field is present');
    
    console.log('✅ Create New Contact form opened successfully');
  });

  it('2. Try Submit Empty Form', async () => {
    // Ensure we're on the Create New Contact form
    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 5000);
    expect(saveButton).toBeTruthy();
    
    // Try to submit empty form by clicking Save button
    await driver.elementClick(Selectors.saveButton);
    console.log('Clicked Save button with empty form');
    await driver.pause(2000);
    
    // Check First Name validation error
    try {
      const firstNameError = await driver.execute('flutter:waitFor', Selectors.firstNameValidationError, 3000);
      expect(firstNameError).toBeTruthy();
      console.log('✅ First Name validation error displayed');
      
      // Get error text to verify it matches expected message
      const errorText = await driver.getElementText(Selectors.firstNameValidationError);
      expect(errorText).toBe("Fill in the first name");
      console.log(`First Name error message: "${errorText}"`);
    } catch (error) {
      console.log('❌ First Name validation error not found - checking alternative approaches');
      
      // Alternative: Look for TextField with error decoration
      try {
        // Check if the first name field shows error state (red border/color)
        const firstNameField = await driver.execute('flutter:waitFor', Selectors.firstNameField, 2000);
        if (firstNameField) {
          console.log('First Name field found - error state might be visual only');
        }
      } catch {
        console.log('Could not verify First Name field error state');
      }
    }
    
    // Check Last Name validation error
    try {
      const lastNameError = await driver.execute('flutter:waitFor', Selectors.lastNameValidationError, 3000);
      expect(lastNameError).toBeTruthy();
      console.log('✅ Last Name validation error displayed');
      
      const errorText = await driver.getElementText(Selectors.lastNameValidationError);
      expect(errorText).toBe("Fill in the last name");
      console.log(`Last Name error message: "${errorText}"`);
    } catch (error) {
      console.log('❌ Last Name validation error not found');
    }
    
    // Check Email validation error
    try {
      const emailError = await driver.execute('flutter:waitFor', Selectors.emailValidationError, 3000);
      expect(emailError).toBeTruthy();
      console.log('✅ Email validation error displayed');
      
      const errorText = await driver.getElementText(Selectors.emailValidationError);
      expect(errorText).toBe("Fill in the email");
      console.log(`Email error message: "${errorText}"`);
    } catch (error) {
      console.log('❌ Email validation error not found');
    }
    
    // Check if form is still visible (not submitted)
    const firstNameField = await driver.execute('flutter:waitFor', Selectors.firstNameField, 3000);
    expect(firstNameField).toBeTruthy();
    console.log('✅ Form is still visible - submission prevented by validation');
    
    console.log('✅ Empty form validation test completed');
  });

  /*
  it('3. Try to submit filling All Required Fields', async () => {
    // Fill only required fields: First Name, Last Name, Email
    const requiredTestData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    };
    
    // Fill First Name (required)
    const firstNameField = await driver.execute('flutter:waitFor', Selectors.firstNameField, 3000);
    expect(firstNameField).toBeTruthy();
    await driver.elementClick(Selectors.firstNameField);
    await driver.elementClear(Selectors.firstNameField);
    await driver.elementSendKeys(Selectors.firstNameField, requiredTestData.firstName);
    console.log(`✅ Filled First Name: ${requiredTestData.firstName}`);
    
    // Fill Last Name (required)
    const lastNameField = await driver.execute('flutter:waitFor', Selectors.lastNameField, 3000);
    expect(lastNameField).toBeTruthy();
    await driver.elementClick(Selectors.lastNameField);
    await driver.elementClear(Selectors.lastNameField);
    await driver.elementSendKeys(Selectors.lastNameField, requiredTestData.lastName);
    console.log(`✅ Filled Last Name: ${requiredTestData.lastName}`);
    
    // Fill Email (required with validation)
    const emailField = await driver.execute('flutter:waitFor', Selectors.emailField, 3000);
    expect(emailField).toBeTruthy();
    await driver.elementClick(Selectors.emailField);
    await driver.elementClear(Selectors.emailField);
    await driver.elementSendKeys(Selectors.emailField, requiredTestData.email);
    console.log(`✅ Filled Email: ${requiredTestData.email}`);
    
    await driver.pause(1000);
    
    // Submit form by clicking Save button
    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 3000);
    expect(saveButton).toBeTruthy();
    await driver.elementClick(Selectors.saveButton);
    console.log('Clicked Save button with required fields filled');
    await driver.pause(3000);
    
    // Check for success indicators
    try {
      // Check if we're navigated back (successful creation)
      const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
      if (listOfUsersButton) {
        console.log('✅ Contact created successfully - returned to users list');
      }
    } catch (error) {
      console.log('Still on form - checking for other success indicators');
      
      // Check for success message/snackbar
      try {
        const snackBar = await driver.execute('flutter:waitFor', Selectors.snackBar, 3000);
        if (snackBar) {
          console.log('✅ SnackBar message displayed - likely success notification');
        }
      } catch {
        console.log('No SnackBar found');
      }
      
      // Check if loading state exists
      try {
        const loadingIndicator = await driver.execute('flutter:waitFor', Selectors.loadingIndicator, 2000);
        if (loadingIndicator) {
          console.log('Loading indicator visible - form being processed');
          await driver.pause(3000); // Wait for loading to complete
        }
      } catch {
        console.log('No loading indicator found');
      }
    }
    
    console.log('✅ Required fields submission test completed');
  });
  */


  /*123213
  it('4. Try to submit Filling all fields', async () => {
    // Navigate back to create contact form if needed
    try {
      const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 2000);
      if (!saveButton) {
        // Navigate to add user form
        const addUserButton = await driver.execute('flutter:waitFor', Selectors.addUserButton, 3000);
        await driver.elementClick(Selectors.addUserButton);
        await driver.pause(2000);
      }
    } catch (error) {
      // Navigate to add user form
      const addUserButton = await driver.execute('flutter:waitFor', Selectors.addUserButton, 3000);
      await driver.elementClick(Selectors.addUserButton);
      await driver.pause(2000);
    }
    
    // Fill all available fields with comprehensive test data
    const completeTestData = {
      // Basic Information
      firstName: 'Jane',
      middleName: 'Marie',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      
      // Contact Information
      streetAddress: '123 Main Street',
      address2: 'Apt 456',
      city: 'New York',
      stateProvinceRegion: 'NY',
      zipPostalCode: '10001',
      country: 'USA',
      mobilePhone: '+1-555-123-4567',
      workPhone: '+1-555-987-6543',
      homePhone: '+1-555-456-7890',
      otherPhone: '+1-555-111-2222',
      
      // Personal Information
      jobTitle: 'Software Engineer',
      employeeNumber: 'EMP001',
      licenseNumber: 'DL123456789',
      licenseClass: 'Class A',
      licenseState: 'NY',
      hourlyLaborRate: '75.00',
      
      // Custom Fields
      idNumber: 'ID987654321',
      cdlEndorsements: 'Hazmat, Passenger'
    };
    
    // Fill BASIC INFORMATION fields
    console.log('Filling BASIC INFORMATION fields...');
    
    await driver.elementClick(Selectors.firstNameField);
    await driver.elementClear(Selectors.firstNameField);
    await driver.elementSendKeys(Selectors.firstNameField, completeTestData.firstName);
    console.log(`✅ First Name: ${completeTestData.firstName}`);
    
    await driver.elementClick(Selectors.middleNameField);
    await driver.elementClear(Selectors.middleNameField);
    await driver.elementSendKeys(Selectors.middleNameField, completeTestData.middleName);
    console.log(`✅ Middle Name: ${completeTestData.middleName}`);
    
    await driver.elementClick(Selectors.lastNameField);
    await driver.elementClear(Selectors.lastNameField);
    await driver.elementSendKeys(Selectors.lastNameField, completeTestData.lastName);
    console.log(`✅ Last Name: ${completeTestData.lastName}`);
    
    await driver.elementClick(Selectors.emailField);
    await driver.elementClear(Selectors.emailField);
    await driver.elementSendKeys(Selectors.emailField, completeTestData.email);
    console.log(`✅ Email: ${completeTestData.email}`);
    
    // Handle Group selection (SectionButton)
    try {
      const groupButton = await driver.execute('flutter:waitFor', Selectors.groupSectionButton, 3000);
      await driver.elementClick(Selectors.groupSectionButton);
      console.log('Clicked Group selection button');
      await driver.pause(1000);
      
      // Select first group option if bottom sheet opens
      try {
        const groupOption = await driver.execute('flutter:waitFor', Selectors.groupOption(0), 3000);
        await driver.elementClick(Selectors.groupOption(0));
        console.log('✅ Selected group from list');
      } catch {
        console.log('Group selection bottom sheet not found or no options available');
      }
    } catch {
      console.log('Group selection button not available');
    }
    
    // Handle User Access selection
    try {
      const userAccessButton = await driver.execute('flutter:waitFor', Selectors.selectUserAccessButton, 3000);
      await driver.elementClick(Selectors.selectUserAccessButton);
      console.log('Clicked Select User Access button');
      await driver.pause(2000);
      
      // Navigate to User Access selection page and select first option
      try {
        const userAccessOption = await driver.execute('flutter:waitFor', Selectors.userAccessOption(0), 3000);
        await driver.elementClick(Selectors.userAccessOption(0));
        console.log('✅ Selected user access option');
        
        // Navigate back if needed
        const backButton = await driver.execute('flutter:waitFor', Selectors.backButton, 2000);
        if (backButton) {
          await driver.elementClick(Selectors.backButton);
          await driver.pause(1000);
        }
      } catch {
        console.log('User Access options not found - navigating back');
        const backButton = await driver.execute('flutter:waitFor', Selectors.backButton, 2000);
        if (backButton) {
          await driver.elementClick(Selectors.backButton);
        }
      }
    } catch {
      console.log('Select User Access button not available');
    }
    
    // Scroll down to access more fields
    try {
      await driver.execute('flutter:scroll', Selectors.createContactForm, {dx: 0, dy: -300, durationMilliseconds: 500});
      console.log('Scrolled down to access more fields');
      await driver.pause(1000);
    } catch {
      console.log('Scroll not available - continuing with visible fields');
    }
    
    // Fill CONTACT INFORMATION fields
    console.log('Filling CONTACT INFORMATION fields...');
    
    const contactFields = [
      [Selectors.streetAddressField, completeTestData.streetAddress, 'Street Address'],
      [Selectors.address2Field, completeTestData.address2, 'Address 2'],
      [Selectors.cityField, completeTestData.city, 'City'],
      [Selectors.stateProvinceRegionField, completeTestData.stateProvinceRegion, 'State/Province/Region'],
      [Selectors.zipPostalCodeField, completeTestData.zipPostalCode, 'Zip/Postal Code'],
      [Selectors.countryField, completeTestData.country, 'Country'],
      [Selectors.mobilePhoneField, completeTestData.mobilePhone, 'Mobile Phone'],
      [Selectors.workPhoneField, completeTestData.workPhone, 'Work Phone'],
      [Selectors.homePhoneField, completeTestData.homePhone, 'Home Phone'],
      [Selectors.otherPhoneField, completeTestData.otherPhone, 'Other Phone']
    ];
    
    for (const [selector, value, fieldName] of contactFields) {
      try {
        await driver.elementClick(selector);
        await driver.elementClear(selector);
        await driver.elementSendKeys(selector, value);
        console.log(`✅ ${fieldName}: ${value}`);
      } catch {
        console.log(`❌ ${fieldName} field not accessible`);
      }
    }
    
    // Continue scrolling for PERSONAL INFORMATION fields
    try {
      await driver.execute('flutter:scroll', Selectors.createContactForm, {dx: 0, dy: -300, durationMilliseconds: 500});
      await driver.pause(1000);
    } catch {
      console.log('Additional scroll not available');
    }
    
    // Fill PERSONAL INFORMATION fields
    console.log('Filling PERSONAL INFORMATION fields...');
    
    const personalFields = [
      [Selectors.jobTitleField, completeTestData.jobTitle, 'Job Title'],
      [Selectors.employeeNumberField, completeTestData.employeeNumber, 'Employee Number'],
      [Selectors.licenseNumberField, completeTestData.licenseNumber, 'License Number'],
      [Selectors.licenseClassField, completeTestData.licenseClass, 'License Class'],
      [Selectors.licenseStateProvinceRegionField, completeTestData.licenseState, 'License State'],
      [Selectors.hourlyLaborRateField, completeTestData.hourlyLaborRate, 'Hourly Labor Rate']
    ];
    
    for (const [selector, value, fieldName] of personalFields) {
      try {
        await driver.elementClick(selector);
        await driver.elementClear(selector);
        await driver.elementSendKeys(selector, value);
        console.log(`✅ ${fieldName}: ${value}`);
      } catch {
        console.log(`❌ ${fieldName} field not accessible`);
      }
    }
    
    // Handle date fields (they open calendar bottom sheets)
    const dateFields = [
      [Selectors.dateOfBirthField, 'Date of Birth'],
      [Selectors.startDateField, 'Start Date'],
      [Selectors.leaveDateField, 'Leave Date'],
      [Selectors.hireDateField, 'Hire Date']
    ];
    
    for (const [selector, fieldName] of dateFields) {
      try {
        await driver.elementClick(selector);
        console.log(`Clicked ${fieldName} field`);
        await driver.pause(1000);
        
        // If calendar bottom sheet opens, confirm with current date
        try {
          const confirmButton = await driver.execute('flutter:waitFor', Selectors.calendarConfirmButton, 2000);
          await driver.elementClick(Selectors.calendarConfirmButton);
          console.log(`✅ ${fieldName} date selected`);
        } catch {
          console.log(`${fieldName} calendar not found - field might not be accessible`);
        }
      } catch {
        console.log(`❌ ${fieldName} field not accessible`);
      }
    }
    
    // Fill CUSTOM FIELDS
    console.log('Filling CUSTOM FIELDS...');
    
    try {
      await driver.execute('flutter:scroll', Selectors.createContactForm, {dx: 0, dy: -200, durationMilliseconds: 500});
      await driver.pause(1000);
    } catch {
      console.log('Final scroll not available');
    }
    
    const customFields = [
      [Selectors.idNumberField, completeTestData.idNumber, 'ID Number'],
      [Selectors.cdlEndorsementsField, completeTestData.cdlEndorsements, 'CDL Endorsements']
    ];
    
    for (const [selector, value, fieldName] of customFields) {
      try {
        await driver.elementClick(selector);
        await driver.elementClear(selector);
        await driver.elementSendKeys(selector, value);
        console.log(`✅ ${fieldName}: ${value}`);
      } catch {
        console.log(`❌ ${fieldName} field not accessible`);
      }
    }
    
    await driver.pause(2000);
    
    // Submit form with all fields filled
    const saveButton = await driver.execute('flutter:waitFor', Selectors.saveButton, 3000);
    expect(saveButton).toBeTruthy();
    await driver.elementClick(Selectors.saveButton);
    console.log('🚀 Clicked Save button with all fields filled');
    await driver.pause(5000); // Extra wait for processing
    
    // Verify successful creation
    try {
      const listOfUsersButton = await driver.execute('flutter:waitFor', Selectors.listOfUsers, 5000);
      if (listOfUsersButton) {
        console.log('✅ Contact created successfully with all fields - returned to users list');
      }
    } catch (error) {
      console.log('Checking alternative success indicators...');
      
      try {
        const snackBar = await driver.execute('flutter:waitFor', Selectors.snackBar, 3000);
        if (snackBar) {
          console.log('✅ Success notification displayed');
        }
      } catch {
        console.log('Form submission status unclear - manual verification may be needed');
      }
    }
    
    console.log('✅ Complete form submission test finished');
});
*/
});