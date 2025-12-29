import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";
import type { InsertReservation } from "@shared/schema";

export default function Contact() {
  const { t } = useLanguage();
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
        title: t('contact.messages.success.title'),
        description: t('contact.messages.success.description'),
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
        title: t('contact.messages.error.title'),
        description: error.message || t('contact.messages.error.description'),
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.checkIn || !formData.checkOut) {
      toast({
        title: t('contact.messages.missing.title'),
        description: t('contact.messages.missing.description'),
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
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">{t('contact.getInTouch')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-2xl lago-gold mt-1"></i>
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.email.title')}</h4>
                  <p className="text-blue-100">{t('contact.email.value')}</p>
                  <p className="text-sm text-blue-200">{t('contact.email.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-2xl lago-teal mt-1"></i>
                <div>
                  <h4 className="font-semibold mb-1">{t('contact.location.title')}</h4>
                  <p className="text-blue-100">{t('contact.location.value')}</p>
                  <p className="text-sm text-blue-200">{t('contact.location.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white font-semibold">{t('contact.form.firstName')}</Label>
                  <Input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                    placeholder={t('contact.form.firstNamePlaceholder')}
                    required
                  />
                </div>
                <div>
                  <Label className="text-white font-semibold">{t('contact.form.lastName')}</Label>
                  <Input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                    placeholder={t('contact.form.lastNamePlaceholder')}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-white font-semibold">{t('contact.form.email')}</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
              
              <div>
                <Label className="text-white font-semibold">{t('contact.form.phone')}</Label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                  placeholder={t('contact.form.phonePlaceholder')}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white font-semibold">{t('contact.form.checkIn')}</Label>
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
                  <Label className="text-white font-semibold">{t('contact.form.checkOut')}</Label>
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
                <Label className="text-white font-semibold">{t('contact.form.specialRequests')}</Label>
                <Textarea
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-yellow-400"
                  placeholder={t('contact.form.specialRequestsPlaceholder')}
                />
              </div>
              
              <Button
                type="submit"
                disabled={reservationMutation.isPending}
                className="w-full bg-yellow-500 text-black hover:bg-yellow-400 py-4 text-lg font-bold"
              >
                {reservationMutation.isPending ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
              
              <p className="text-sm text-blue-200 text-center">
                {t('contact.form.confirmation')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
