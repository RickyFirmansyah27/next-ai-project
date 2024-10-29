import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Menggunakan instansi global PrismaClient jika sudah ada, atau membuat yang baru
const prismadb = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Menambahkan logging untuk query dan error
});

// Menyimpan instansi PrismaClient di global jika bukan di lingkungan produksi
if (process.env.NODE_ENV !== "production") {
  global.prisma = prismadb;
}

// Ekspor instansi prisma untuk digunakan di seluruh aplikasi
export default prismadb;
