export interface genericResponse<Item extends Record<string,any>> {
	products: Item[];
	total: number;
	skip: number;
	limit: number;
}
