import { Descriptor } from './descriptor.interface';

export interface Home {
    tagline: string;
    welcome_statements: string[];
    descriptors: Descriptor[];
}