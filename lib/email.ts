export type SubscribeResult = { ok: true } | { ok: false; error: string };

/**
 * Placeholder subscribe function. Swap the body for a real ESP call, e.g.:
 *
 * ConvertKit:
 *   await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
 *   });
 *
 * Mailchimp:
 *   await fetch(`https://<dc>.api.mailchimp.com/3.0/lists/${listId}/members`, {
 *     method: "POST",
 *     headers: { Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}` },
 *     body: JSON.stringify({ email_address: email, status: "subscribed" }),
 *   });
 */
export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  // Simulated network latency until a real ESP is wired in.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return { ok: true };
}
