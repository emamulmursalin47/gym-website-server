export class QueryBuilder<T> {
  private query: any;
  private queryObj: any;

  constructor(query: any, queryObj: any) {
    this.query = query;
    this.queryObj = queryObj;
  }

  paginate() {
    const page = Number(this.queryObj.page) || 1;
    const limit = Number(this.queryObj.limit) || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

  search(fields: string[] = []) {
    if (this.queryObj.searchTerm && fields.length) {
      this.query = this.query.find({
        $or: fields.map(field => ({
          [field]: { $regex: this.queryObj.searchTerm, $options: 'i' }
        }))
      });
    }
    return this;
  }

  filter() {
    const excludeFields = ['page', 'limit', 'sort', 'order', 'searchTerm'];
    const filters = { ...this.queryObj };
    excludeFields.forEach(field => delete filters[field]);
    if (Object.keys(filters).length) {
      this.query = this.query.find(filters);
    }
    return this;
  }

  sort() {
    if (this.queryObj.sort) {
      const sortBy = this.queryObj.sort;
      const order = this.queryObj.order === 'asc' ? 1 : -1;
      this.query = this.query.sort({ [sortBy]: order });
    }
    return this;
  }

  exec() {
    return this.query;
  }
}
