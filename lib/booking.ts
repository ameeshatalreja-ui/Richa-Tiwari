export type BookingPayload = {
  name: string;
  email: string;
  role: string;
  message: string;
};

export type BookingResult = { ok: true } | { ok: false; error: string };

/**
 * Placeholder booking submit. Swap the body for a real integration, e.g. a
 * Calendly/Cal.com webhook, an internal API route, or a CRM write.
 */
export async function submitBookingRequest(
  payload: BookingPayload
): Promise<BookingResult> {
  if (!payload.name.trim() || !payload.email.trim()) {
    return { ok: false, error: "Name and email are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  return { ok: true };
}
