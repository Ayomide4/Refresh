import Footer from '../../components/Footer';
import { sanity } from '../../lib/sanity';
import { siteSettingsQuery } from '../../lib/queries';
import { SiteSettings } from '../../page';

export default async function GalleryPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings: SiteSettings = await sanity.fetch(siteSettingsQuery);

  return (
    <>
      {children}
      <Footer backgroundColor="bg-[#E9E7EC]" textColor="text-black" siteSettings={siteSettings} />
    </>
  );
}
