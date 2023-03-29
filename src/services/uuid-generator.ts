import { v4 as uuidv4 } from 'uuid';

const getUniqId = (): string => uuidv4() || '';

export default getUniqId;
