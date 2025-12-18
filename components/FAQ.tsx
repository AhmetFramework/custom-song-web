const faqs = [
  {
    question: 'Teslimat Süresi',
    answer: '-Dijital Hediyeler İçin: 🎨Kişiye özel şarkı, hikayenize özel animasyon siparişleri özenlice hazırlanıp gün içerisinde teslim edilmektedir. 🎉 🎨Şarkı ve animasyon dışındaki dijital ürünlerimiz sipariş sayfasında belirtildiği sürede kesin teslimatı yapılmaktadır. 🎉 -Fiziksel Hediyeler İçin: 🎨Tüm siparişler özenlice hazırlanıp 1-5 gün içerisinde teslim edilmektedir. 🎉',
  },
  {
    question: 'Gizlilik & Güvence',
    answer: 'Fiziksel Ürünler için Veri Saklama Politikası: • Fiziksel ürünlerde de, fotoğraf ve videolarınız siparişiniz hazırlandıktan sonra veri tabanımızdan otomatik olarak silinir. Bu veriler tarafımızca saklanmaz. Dijital Ürünler için Veri Saklama Politikası: • Dijital ürünlerde, fotoğraf ve videolarınız siparişiniz hazırlandıktan sonra veri tabanımızdan otomatik olarak silinir. Bu veriler tarafımızca saklanmaz; yalnızca size özel hazırladığımız internet sitenizde saklanır.',
  },
  {
    question: 'Hakkımızda',
    answer: 'Sanal Hediyem ailesi olarak 2024 yılından bu yana misyonumuz, müşterilere sorunsuz hizmetler sunarak güven temelli alışveriş ortamı sunmaktır. Uzun vadede bu işin içindeyiz ve sizin de bu yolculuğun bir parçası olmanızı çok isteriz.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">Sıkça Sorulanlar</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
