import { 
  users, 
  reservations,
  weddingInquiries,
  newsletterSubscriptions,
  type User, 
  type InsertUser,
  type Reservation,
  type InsertReservation,
  type WeddingInquiry,
  type InsertWeddingInquiry,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Reservation methods
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  getReservation(id: number): Promise<Reservation | undefined>;
  
  // Wedding inquiry methods
  createWeddingInquiry(inquiry: InsertWeddingInquiry): Promise<WeddingInquiry>;
  getWeddingInquiries(): Promise<WeddingInquiry[]>;
  
  // Newsletter subscription methods
  subscribeNewsletter(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private reservations: Map<number, Reservation>;
  private weddingInquiries: Map<number, WeddingInquiry>;
  private newsletterSubscriptions: Map<number, Newsletter>;
  private currentUserId: number;
  private currentReservationId: number;
  private currentWeddingId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.weddingInquiries = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentReservationId = 1;
    this.currentWeddingId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = this.currentReservationId++;
    const reservation: Reservation = {
      ...insertReservation,
      id,
      createdAt: new Date()
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getReservation(id: number): Promise<Reservation | undefined> {
    return this.reservations.get(id);
  }

  async createWeddingInquiry(insertWeddingInquiry: InsertWeddingInquiry): Promise<WeddingInquiry> {
    const id = this.currentWeddingId++;
    const inquiry: WeddingInquiry = {
      ...insertWeddingInquiry,
      id,
      createdAt: new Date()
    };
    this.weddingInquiries.set(id, inquiry);
    return inquiry;
  }

  async getWeddingInquiries(): Promise<WeddingInquiry[]> {
    return Array.from(this.weddingInquiries.values());
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values())
      .find(sub => sub.email === insertNewsletter.email);
    
    if (existingSubscription) {
      throw new Error("Email already subscribed to newsletter");
    }

    const id = this.currentNewsletterId++;
    const subscription: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
