export const getStatusClass = (status) => {
  switch (status) {
    case "Pesanan Baru":
      return "bg-yellow/30 text-navy-dark";
    case "Sudah Dihubungi":
      return "bg-blue-accent/10 text-blue-accent";
    case "Diskusi Kebutuhan":
      return "bg-salmon/10 text-salmon";
    case "Menunggu Persetujuan":
      return "bg-orange-100 text-orange-700";
    case "Dikerjakan":
      return "bg-purple-100 text-purple-700";
    case "Revisi":
      return "bg-pink-100 text-pink-700";
    case "Selesai":
      return "bg-green-100 text-green-700";
    case "Dibatalkan":
      return "bg-red-100 text-red-700";
    default:
      return "bg-light-gray text-text-slate";
  }
};