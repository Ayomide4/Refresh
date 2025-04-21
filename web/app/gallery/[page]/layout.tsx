import Footer from '../../components/Footer';

export default function GalleryPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Footer backgroundColor="bg-white" textColor="text-black" />
    </>
  );
}
