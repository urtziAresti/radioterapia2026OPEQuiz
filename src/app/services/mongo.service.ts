import clientPromise from "./mongodb";
import {
  Collection,
  Document,
  Filter,
  ObjectId,
  OptionalUnlessRequiredId,
  UpdateFilter
} from "mongodb";

export class MongoService<T extends Document> {

  constructor(
    private database: string,
    private collection: string
  ) {}

  private async getCollection(): Promise<Collection<T>> {
    const client = await clientPromise;
    return client.db(this.database).collection<T>(this.collection);
  }

  async create(document: OptionalUnlessRequiredId<T>) {
    const col = await this.getCollection();

    return col.insertOne(document);
  }

  async createMany(documents: OptionalUnlessRequiredId<T>[]) {
    const col = await this.getCollection();

    return col.insertMany(documents);
  }

  async find(filter: Filter<T> = {}) {
    const col = await this.getCollection();

    return col.find(filter).toArray();
  }

  async findOne(filter: Filter<T>) {
    const col = await this.getCollection();

    return col.findOne(filter);
  }

  async findById(id: string) {
    const col = await this.getCollection();

    return col.findOne({
      _id: new ObjectId(id)
    } as Filter<T>);
  }

  async update(filter: Filter<T>, update: UpdateFilter<T>) {
    const col = await this.getCollection();

    return col.updateOne(filter, update);
  }

  async updateById(id: string, update: UpdateFilter<T>) {
    const col = await this.getCollection();

    return col.updateOne(
      {
        _id: new ObjectId(id)
      } as Filter<T>,
      update
    );
  }

  async delete(filter: Filter<T>) {
    const col = await this.getCollection();

    return col.deleteOne(filter);
  }

  async deleteById(id: string) {
    const col = await this.getCollection();

    return col.deleteOne({
      _id: new ObjectId(id)
    } as Filter<T>);
  }

  async count(filter: Filter<T> = {}) {
    const col = await this.getCollection();

    return col.countDocuments(filter);
  }
}