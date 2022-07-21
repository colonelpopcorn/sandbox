const recruiter = process.argv[2] || '';
const isMultiple = process.argv[3] == 'true' || false;
const client = process.argv[4] || '';
const clients = isMultiple ? `your clients are` : `your ${client} is`;


const cannedResponseTemplate = `Hi ${recruiter},
I'm not interested in making a full time move at the moment. However, I am available on a part-time contract basis. If that's not something ${clients} looking for, I understand, but I'd love to help them solve their problems if they're willing to work with a contractor. There's a contact form on https://smallbizdevops.com where I can be reached for inquiry about contract work. In the meanwhile, I will definitely let any of my qualified contacts know that you are looking for talent.
Hope your search goes well!
Jonathan Ling`;

console.log(cannedResponseTemplate);