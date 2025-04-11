export const metadata = {
  title: "Synapse: Privacy Policy",
  description: "Privacy policy for Synapse AI",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12">
      <div className="bg-surface/40 mx-auto max-w-3xl rounded-xl px-4 text-white shadow-sm sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">Synapse Privacy Policy</h1>
            <p className="text-sm">Effective Date: April 11, 2025</p>
          </div>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Introduction</h2>
            <p className="mb-4">
              This Privacy Policy describes how we collect, use, and handle your personal
              information when you use our application (&quot;Synapse&quot;). Our application
              utilizes OAuth authentication through Google and GitHub to provide you with a secure
              login experience. We are committed to protecting your privacy and ensuring
              transparency regarding the information we collect.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Information Collection</h2>
            <p className="mb-4">
              When you choose to access Synapse, we collect limited personal information through the
              OAuth authentication process:
            </p>
            <ul className="mb-4 list-disc pl-8">
              <li className="mb-1">Email address</li>
              <li className="mb-1">Full name</li>
            </ul>
            <p>
              This information is obtained solely for the purpose of user identification and
              authentication.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Use of Information</h2>
            <p className="mb-4">
              The personal information we collect is used exclusively for the following limited
              purposes:
            </p>
            <ul className="mb-4 list-disc pl-8">
              <li className="mb-1">To authenticate your identity when you access Synapse</li>
              <li className="mb-1">To maintain your user account within our system</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Data Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to external
              parties. Your information remains strictly within our system and is not processed
              beyond its storage for authentication purposes.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Third-Party Services</h2>
            <p className="mb-4">
              Synapse utilizes OAuth authentication services provided by Google and GitHub. When you
              choose to authenticate using these services:
            </p>
            <ul className="mb-4 list-disc pl-8">
              <li className="mb-1">
                You will be redirected to the respective service provider&apos;s authentication page
              </li>
              <li className="mb-1">
                The authentication process is governed by the privacy policies of these third-party
                providers
              </li>
              <li className="mb-1">
                We recommend reviewing the privacy policies of Google and GitHub to understand how
                they handle your information during the authentication process
              </li>
            </ul>
          </section>
          <section className="mb-0">
            <h2 className="mb-3 text-xl font-semibold">Acceptance of Terms</h2>
            <p>
              By using Synapse, you acknowledge that you have read and understand this Privacy
              Policy and agree to its terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
