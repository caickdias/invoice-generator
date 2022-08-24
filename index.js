const info = require('./utils/gen-data.js');
const { user, companies, invoice, items } = info;

const { createPdf, addCompany } = require('./utils/functions.js');

const SHOW_COMPANIES = 'showCompanies';
const ADD_COMPANY = 'addCompany';
const CREATE_PDF_DEFAULT = 'createPdfDefault';
const CREATE_PDF_COMPANY = 'createPdfCompany';
const TOO_MANY_ARGUMENTS = 'tooManyArguments';

const handleArgs = (arg) => {
  const command = getCommand(arg);
  let defaultId = 0;
  
  switch(command){
    case SHOW_COMPANIES:
      console.log(companies);
      break;
    case ADD_COMPANY:
      addCompany();
      break;
    case CREATE_PDF_DEFAULT:      
      createPdf({
        ...info,
        company: companies[defaultId],
      });
      break;
    case CREATE_PDF_COMPANY:
      console.log('id');
      break;
    case TOO_MANY_ARGUMENTS:
      console.log('Too many arguments');
      break;
  }

}

const getCommand = (command) => {
  if(command.length > 1) return TOO_MANY_ARGUMENTS;
  if(command == '') return CREATE_PDF_DEFAULT;
  if(command == '-c' || command == '--companies') return SHOW_COMPANIES;
  if(command == '-a' || command == '--add-company') return ADD_COMPANY;
}

handleArgs(process.argv.slice(2));
//createPdf(info);
