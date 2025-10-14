"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { useState } from "react";

export function ContactForm(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez intégrer avec Lokki plus tard
    console.log("Form submitted:", formData);
    alert(t.form.successMessage);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.form.name}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.form.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t.form.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">{t.form.subject}</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder={t.form.subjectPlaceholder}
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.form.message}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        {t.form.sendButton}
      </Button>
    </form>
  );
}
