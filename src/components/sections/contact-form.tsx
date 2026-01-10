"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function ContactForm(): JSX.Element {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "contact");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success - show toast and clear form
      toast({
        title: "Message sent successfully! 🚴‍♂️",
        description: t.form.successMessage || "We'll get back to you soon!",
        variant: "default",
      });

      // Clear form only on success
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      // Error - show toast but keep form data
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          t.form.sendButton
        )}
      </Button>
    </form>
  );
}
