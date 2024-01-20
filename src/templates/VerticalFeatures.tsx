import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Company Overview"
    description="We are a tech company driven by a passion for sustainability. Our journey began with the vision of creating software solutions that make a positive impact on the planet."
  >
    <VerticalFeatureRow
      title="Sustainable Software Development"
      description="Our Sustainable Software Development focuses on creating applications that not only meet your tech needs but also contribute to environmental sustainability."
      image="/assets/images/computer-device-3d.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Green Tech Solutions"
      description="Explore our Green Tech Solutions designed to optimize processes with minimal ecological impact."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Eco-friendly IT Infrastructure"
      description="Discover our Eco-friendly IT Infrastructure services for a more sustainable and efficient operation."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
