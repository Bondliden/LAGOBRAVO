import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertWeddingInquirySchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Reservation endpoints
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.json({ success: true, reservation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to create reservation" 
        });
      }
    }
  });

  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json({ success: true, reservations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch reservations" 
      });
    }
  });

  // Wedding inquiry endpoints
  app.post("/api/wedding-inquiries", async (req, res) => {
    try {
      const validatedData = insertWeddingInquirySchema.parse(req.body);
      const inquiry = await storage.createWeddingInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to create wedding inquiry" 
        });
      }
    }
  });

  app.get("/api/wedding-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getWeddingInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch wedding inquiries" 
      });
    }
  });

  // Newsletter subscription endpoints
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.subscribeNewsletter(validatedData);
      res.json({ success: true, subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message === "Email already subscribed to newsletter") {
        res.status(409).json({ 
          success: false, 
          message: "Email already subscribed to newsletter" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
