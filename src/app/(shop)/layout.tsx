import { Footer, Sidebar, TopMenu } from '@/components';

export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FFF9FB' }} >

      <TopMenu />
      <Sidebar />

      <div className="px-0 sm:px-10" style={{ backgroundColor: '#FFF9FB' }}>
        { children }

      </div>

      <Footer />
    </main>
  );
}