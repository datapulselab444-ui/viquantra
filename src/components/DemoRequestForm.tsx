"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { brand } from "@/lib/site-data";

export function DemoRequestForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedFormData = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encodedFormData.append(key, value);
      }
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encodedFormData.toString()
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      router.push("/thank-you");
    } catch {
      setError("We could not submit the request. Please email us directly and include your project brief.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      name="demo-request"
      onSubmit={handleSubmit}
      className="enterprise-card rounded-sm p-6 sm:p-8"
      aria-label="Request demo form"
    >
      <input type="hidden" name="form-name" value="demo-request" />
      <p className="hidden">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
          {brand.tagline}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950">Request Demo</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" placeholder="Your name" required maxLength={80} autoComplete="name" />
        <FormField
          label="Work email"
          name="email"
          placeholder="you@company.com"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
        />
        <FormField label="Company" name="company" placeholder="Company name" maxLength={120} autoComplete="organization" />
        <SelectField
          label="Project type"
          name="projectType"
          required
          options={[
            "Realtime analytics platform",
            "Technical intelligence system",
            "Custom software development",
            "Workflow automation",
            "API integration"
          ]}
        />
        <SelectField
          label="Use case"
          name="useCase"
          required
          options={[
            "Internal team workflow",
            "Client-facing dashboard",
            "Community analytics tool",
            "Public subscription product"
          ]}
        />
        <SelectField
          label="Market data involved?"
          name="marketData"
          required
          options={["No", "Yes, informational dashboards only", "Yes, broker or exchange APIs"]}
        />
        <SelectField
          label="Regulated output risk?"
          name="regulatedOutput"
          required
          options={[
            "No",
            "Not sure, needs review",
            "Yes, requires compliance discussion"
          ]}
        />
        <SelectField
          label="Order execution involved?"
          name="orderExecution"
          required
          options={[
            "No",
            "Not sure, needs review",
            "Yes, requires broker and legal review"
          ]}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-800">
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          maxLength={2500}
          placeholder="Share the workflow, data sources, current tools, users, AI-assisted features, integrations, and the system you want to build."
          className="focus-ring w-full resize-none rounded-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
        />
      </div>
      <label className="mt-5 flex items-start gap-3 rounded-sm border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          name="complianceAcknowledgement"
          value="accepted"
          required
          className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-blue-700"
        />
        <span>
          I understand that {brand.name} provides software engineering
          and analytics infrastructure only, not investment advice,
          recommendations, trading calls, or portfolio management.
        </span>
      </label>
      {error ? (
        <p className="mt-5 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 rounded-sm bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-950 focus-ring disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  maxLength,
  autoComplete
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className="focus-ring w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="focus-ring w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
