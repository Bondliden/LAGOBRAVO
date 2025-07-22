import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  checkIn: text("check_in").notNull(),
  checkOut: text("check_out").notNull(),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const weddingInquiries = pgTable("wedding_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  eventDate: text("event_date").notNull(),
  guestCount: integer("guest_count").notNull(),
  packageType: text("package_type").notNull(),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  createdAt: true,
});

export const insertWeddingInquirySchema = createInsertSchema(weddingInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;

export type InsertWeddingInquiry = z.infer<typeof insertWeddingInquirySchema>;
export type WeddingInquiry = typeof weddingInquiries.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletterSubscriptions.$inferSelect;

// Keep existing user schema for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
