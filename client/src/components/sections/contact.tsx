import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import SectionHeading from "@/components/ui/section-heading";
import type { InsertReservation } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    specialRequests: ""
  });

  const reservationMutation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      const response = await apiRequest("POST", "/api/reservations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Reservation Request Submitted",
        description: "Our reservation specialists will contact you within 24 hours to confirm your booking.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        specialRequests: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Reservation Failed",
        description: error.message || "Failed to submit reservation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.checkIn || !formData.checkOut) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    reservationMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Lago Bravo"
          subtitle="Ready to experience luxury? Contact our reservation specialists to plan your perfect getaway."
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-2xl lago-gold mt-1"></i>
                <div>
                  <h4 className="font-semibold mb-1">Phone Reservations</h4>
                  <p className="text-blue-100">+1 800 LAGO-BRAVO</p>
                  <p className="text-sm text-blue-200">Available 24/7 for reservations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-2xl lago-gold mt-1"></i>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-blue-100">reservations@lagobravo.com</p>
                  <p className="text-sm text-blue-200">For general inquiries and reservations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fas fa-heart text-2xl lago-accent mt-1"></i>
                <div>
                  <h4 className="font-semibold mb-1">Wedding Specialist</h4>
                  <p className="text-blue-100">weddings@lagobravo.com</p>
                  <p className="text-sm text-blue-200">Dedicated wedding planning team</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-2xl lago-teal mt-1"></i>
                <div>
                  <h4 className="font-semibold mb-1">Premium Global Destinations</h4>
                  <p className="text-blue-100">Luxury Awaits</p>
                  <p className="text-sm text-blue-200">Multiple exclusive waterfront locations worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Make a Reservation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white font-semibold">First Name</Label>
                  <Input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">Last Name</Label>
                  <Input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-white font-semibold">Email Address</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <Label className="text-white font-semibold">Phone Number</Label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white font-semibold">Check-in Date</Label>
                  <Input
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">Check-out Date</Label>
                  <Input
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white focus:border-yellow-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-white font-semibold">Special Requests</Label>
                <Textarea
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                  placeholder="Tell us about your preferences or special requirements..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={reservationMutation.isPending}
                className="w-full bg-yellow-500 text-black hover:bg-yellow-400 py-4 text-lg font-bold"
              >
                {reservationMutation.isPending ? "Submitting..." : "Submit Reservation Request"}
              </Button>
              
              <p className="text-sm text-blue-200 text-center">
                Our reservation specialists will contact you within 24 hours to confirm your booking.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
