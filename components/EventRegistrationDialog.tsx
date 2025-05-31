"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { toast } from "sonner";

export default function EventRegistrationDialog({
	eventName,
	disabled = false,
}: {
	eventName: string;
	disabled?: boolean;
}) {
	const [formData, setFormData] = useState({
		cf_name: "",
		cf_email: "",
		cf_phone_number: "",
		cf_job_title: "",
		cf_event_name: eventName,
	});

	const [errors, setErrors] = useState<{
		cf_email?: string;
		cf_phone_number?: string;
	}>({});
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false); // control dialog manually

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.cf_email)) {
			setErrors({ cf_email: "Please provide a valid email" });
			return;
		}

		// Basic phone validation (only digits, 10–15 digits allowed)
		const phoneRegex = /^[0-9]{10,15}$/;
		if (!phoneRegex.test(formData.cf_phone_number)) {
			setErrors({
				cf_phone_number: "Please provide a valid phone number",
			});
			return;
		}

		setLoading(true);
		setErrors({});

		try {
			const res = await fetch("/api/zoho/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const result = await res.json();
			console.log("Zoho Response:", result);

			// ✅ Close dialog and reset form
			setOpen(false);
			setFormData({
				cf_name: "",
				cf_email: "",
				cf_phone_number: "",
				cf_job_title: "",
				cf_event_name: eventName,
			});

			toast.success("Registration successful!");
		} catch (err) {
			console.error("Submission error:", err);
			toast.error("Registration failed. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button
					variant="outline"
					disabled={disabled}
					className="mt-2 px-3 py-1 lg:px-[20px] lg:py-2 transition-all group hover:scale-[1.02] hover:cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out rounded-full border-black border-[0.5px]"
				>
					Register!
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Register for {eventName}
					</AlertDialogTitle>
					<AlertDialogDescription>
						Please fill in your details to complete registration.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="flex flex-col space-y-1">
						<Label htmlFor="cf_event_name">Event</Label>
						<Input
							id="cf_event_name"
							disabled
							value={formData.cf_event_name}
						/>
					</div>
					<div className="flex flex-col space-y-1">
						<Label htmlFor="cf_name">Full Name</Label>
						<Input
							id="cf_name"
							disabled={loading}
							value={formData.cf_name}
							onChange={(e) =>
								setFormData({
									...formData,
									cf_name: e.target.value,
								})
							}
							required
						/>
					</div>

					<div className="flex flex-col space-y-1">
						<Label htmlFor="cf_email">Email</Label>
						<Input
							id="cf_email"
							type="text"
							disabled={loading}
							value={formData.cf_email}
							onChange={(e) =>
								setFormData({
									...formData,
									cf_email: e.target.value,
								})
							}
							required
						/>
						{errors.cf_email && (
							<p className="text-sm text-red-500">
								{errors.cf_email}
							</p>
						)}
					</div>
					<div className="flex flex-col space-y-1">
						<Label htmlFor="cf_phone_number">Phone Number</Label>
						<Input
							id="cf_phone_number"
							type="tel"
							disabled={loading}
							value={formData.cf_phone_number}
							onChange={(e) =>
								setFormData({
									...formData,
									cf_phone_number: e.target.value,
								})
							}
							required
						/>
						{errors.cf_phone_number && (
							<p className="text-sm text-red-500">
								{errors.cf_phone_number}
							</p>
						)}
					</div>

					<div className="flex flex-col space-y-1">
						<Label htmlFor="cf_job_title">
							Job Title / Role{" "}
							<span className="text-muted-foreground">
								(optional)
							</span>
						</Label>
						<Input
							id="cf_job_title"
							type="text"
							disabled={loading}
							value={formData.cf_job_title}
							onChange={(e) =>
								setFormData({
									...formData,
									cf_job_title: e.target.value,
								})
							}
						/>
					</div>

					<AlertDialogFooter className="pt-4">
						<AlertDialogCancel type="button" disabled={loading}>
							Cancel
						</AlertDialogCancel>
						<Button type="submit" disabled={loading}>
							{loading ? "Submitting..." : "Submit"}
						</Button>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	);
}
