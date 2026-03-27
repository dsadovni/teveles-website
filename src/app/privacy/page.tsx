export const metadata = {
  title: 'Privacy Policy | Teveles',
}

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Teveles (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal and health data when you use the Teveles platform (&quot;the Service&quot;). By using Teveles, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What Data We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We collect the following types of data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Garmin Activity and Health Data:</strong> When you connect your Garmin account, we access data via the official Garmin Health API. This includes activity data (runs, rides, swims, steps), sleep metrics, heart rate and HRV data, body battery, stress scores, and other health metrics available through the API.
              </li>
              <li>
                <strong>Account Information:</strong> Your name, email address, and account preferences you provide during registration.
              </li>
              <li>
                <strong>Body Metrics:</strong> Height, weight, and other fitness-related measurements you optionally enter in your profile.
              </li>
              <li>
                <strong>Nutrition Data:</strong> Calorie targets and macronutrient goals you configure in the app.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with the Service, including pages visited, features used, and session duration. This is used solely to improve the product.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Data</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use your data exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide the Teveles analytics and AI insights service</li>
              <li>Generate your dashboard, charts, and personalized reports</li>
              <li>Power the AI coaching assistant with context from your training history</li>
              <li>Send you product-related communications (which you can opt out of)</li>
              <li>Improve and debug the platform (using anonymized, aggregated data only)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not use your health data for advertising, profiling for third parties, insurance purposes, or any purpose beyond providing the Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Storage and Security</h2>
            <p className="text-gray-600 leading-relaxed">
              Your data is stored in secure cloud infrastructure with encryption at rest and in transit using industry-standard TLS/SSL protocols. We implement access controls to limit who can access your data internally. We regularly review our security practices and update them as industry standards evolve.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use the following third-party services to operate Teveles:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Garmin Health API:</strong> To sync your activity and health data. Subject to Garmin&apos;s own Privacy Policy.</li>
              <li><strong>Cloud Infrastructure Providers:</strong> For hosting and data storage. These providers process data only on our behalf and are contractually bound to protect it.</li>
              <li><strong>Analytics Tools:</strong> We may use privacy-respecting analytics tools to understand platform usage. No personally identifiable health data is shared with these services.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not sell, rent, or share your personal health data with any third party for their own purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your data for as long as your account is active. If you delete your account, we will permanently delete your personal data within 30 days, except where retention is required by law. Aggregated, anonymized analytics data may be retained longer but cannot be linked back to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights and Data Deletion</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You have the following rights regarding your data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Access:</strong> Request a copy of all personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Deletion:</strong> Request deletion of your account and all associated data.</li>
              <li><strong>Portability:</strong> Request an export of your data in a machine-readable format.</li>
              <li><strong>Opt-out:</strong> Opt out of non-essential communications at any time.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@teveles.com" className="text-blue-600 hover:underline">privacy@teveles.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact for Privacy Requests</h2>
            <p className="text-gray-600 leading-relaxed">
              For any privacy-related questions, concerns, or data requests, please contact us at:{' '}
              <a href="mailto:privacy@teveles.com" className="text-blue-600 hover:underline">privacy@teveles.com</a>
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              We will respond to all privacy requests within 30 days.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
