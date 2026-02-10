"use client";

import { FadeUp } from "@/components/common/Motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "fafureolakunle12@gmail.com",
      href: "mailto:fafureolakunle12@gmail.com",
      glow: "from-primary/30 to-purple-500/30",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 903 475-3273",
      href: "tel:+2349034753273",
      glow: "from-cyan-500/30 to-blue-500/30",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Oyo State, IB",
      href: null,
      glow: "from-emerald-500/30 to-green-500/30",
    },
  ];

  return (
    <div className="space-y-8">
      <FadeUp>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Contact Information
        </h2>
      </FadeUp>

      {/* Contact Cards */}
      <div className="space-y-5">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;

          return (
            <FadeUp key={detail.label} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white/5
                  backdrop-blur-2xl
                  border border-white/10
                  overflow-hidden
                  shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                "
              >
                {/* Glow */}
                <div
                  className={`
                    pointer-events-none absolute inset-0
                    bg-gradient-to-br ${detail.glow}
                    opacity-20
                  `}
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      bg-gradient-to-br from-black to-white
                      backdrop-blur-xl
                      border border-white/10
                      flex items-center justify-center
                    "
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white/80 mb-1">
                      {detail.label}
                    </h3>

                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-white/60 hover:text-primary transition-colors text-sm"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-white/60 text-sm">{detail.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          );
        })}
      </div>

      {/* Availability Status */}
      <FadeUp delay={0.45}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="
            relative p-6 rounded-2xl
            bg-white/5
            backdrop-blur-2xl
            border border-green-500/30
            overflow-hidden
            shadow-[0_12px_40px_rgba(34,197,94,0.35)]
          "
        >
          {/* Green pulse glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/30 via-transparent to-emerald-500/30 opacity-25" />

          <div className="relative flex items-start gap-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="
                w-12 h-12 rounded-xl
                bg-green-500/20
                border border-green-500/30
                flex items-center justify-center
              "
            >
              <CheckCircle className="w-7 h-7 text-green-400" />
            </motion.div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white mb-1">
                Availability Status
              </h3>

              <p className="text-green-400 font-semibold mb-2">
                Available for new projects
              </p>

              <p className="text-sm text-white/60 mb-4">
                Currently accepting new work and collaborations.
              </p>

              <div className="flex items-center justify-between text-xs text-white/50 pt-3 border-t border-green-500/20">
                <span>Response time</span>
                <span className="font-semibold text-white/70">
                  Within 24 hours
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </FadeUp>
    </div>
  );
}