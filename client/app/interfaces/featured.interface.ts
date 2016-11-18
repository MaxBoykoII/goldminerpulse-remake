/*
 * Interface for the data from the config-featured API
 */

import { FeaturedItem } from './featured-item.interface';

 export interface Featured {
     lead: string;
     features: FeaturedItem[];
 }