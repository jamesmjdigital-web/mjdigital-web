import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name must not exceed 50 characters.",
    }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
  company: z
    .string()
    .max(100, {
      message: "Company name must not exceed 100 characters.",
    })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(1000, {
      message: "Message must not exceed 1000 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "We'll respond within 24 hours. Get ready to scale!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-fade-in ${headerVisible ? "visible" : ""}`}>
          <h2 className="text-foreground mb-4">Ready to Scale? Start Your Free Audit</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how AI can transform your business. Fill out the form below and we'll get
            back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <Card ref={formRef} className={`lg:col-span-2 p-4 sm:p-6 md:p-8 lg:p-10 bg-card border-border scroll-slide-in-left ${formVisible ? "visible" : ""}`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground">
                          Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background border-border focus:border-secondary focus:ring-secondary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground">
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="bg-background border-border focus:border-secondary focus:ring-secondary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Company
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Company Name"
                          className="bg-background border-border focus:border-secondary focus:ring-secondary"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs text-muted-foreground">
                        Optional
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Message <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project and goals..."
                          rows={6}
                          className="bg-background border-border focus:border-secondary focus:ring-secondary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-xs text-muted-foreground">
                        {field.value.length}/1000 characters
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full min-h-[44px] bg-secondary text-primary hover:bg-secondary/90 text-base sm:text-lg py-5 sm:py-6 h-auto font-bold glow-cyan transition-smooth hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </Button>

              </form>
            </Form>
          </Card>

          {/* Contact Info */}
          <div ref={infoRef} className={`space-y-4 sm:space-y-6 scroll-slide-in-right ${infoVisible ? "visible" : ""}`} style={{ transitionDelay: infoVisible ? "0.2s" : "0s" }}>
            <Card className="p-4 sm:p-6 bg-card border-border hover:border-secondary/30 transition-smooth">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">Email Us</h3>
                  <a
                    href="mailto:hello@mjdigital.ai"
                    className="text-sm sm:text-base text-muted-foreground hover:text-secondary transition-smooth break-all"
                  >
                    hello@mjdigital.ai
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-card border-border hover:border-secondary/30 transition-smooth">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-indigo" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">Call Us</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-sm sm:text-base text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-secondary/10 to-indigo/10 border-secondary/20">
              <h3 className="font-bold text-sm sm:text-base text-foreground mb-2">Response Time</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We typically respond within 24 hours during business days. For urgent inquiries,
                please call us directly.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
