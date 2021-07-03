import { User } from './User'
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const customMap = new CustomMap('map');
// implicit type checks here
customMap.addMaker(user);
customMap.addMaker(company);