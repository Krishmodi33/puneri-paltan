import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MyAxios from "../utils/MyAxios";
import HeroBanner from "../global/HeroBanner";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SingleGallery = () => {
  const { id } = useParams();

  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchSingleGallery = async () => {
      if (!id) {
        setError("ID not found");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const res = await MyAxios.get(`/single_gallary?id=${id}`);

        const payload = res.data?.data ?? res.data;
        const items = Array.isArray(payload)
          ? payload
          : payload
          ? [payload]
          : [];

        setGalleryData(items);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleGallery();
  }, [id]);

  const len = selectedItem?.match_images?.length || 0;

  const foewIndex = () => {
    if (!len) return;
    setIndex((i) => (i + 1) % len);
  };

  const backwIndex = () => {
    if (!len) return;
    setIndex((i) => (i - 1 + len) % len);
  };

  const openModal = (item, imageIndex) => {
    setIsModalOpen(true);
    setSelectedItem(item);
    setIndex(imageIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setIndex(0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">
          Loading Gallery...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold text-red-500">
          {error}
        </h1>

        <Link
          to="/gallery"
          className="mt-6 text-orange-500 hover:underline"
        >
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <>
      <HeroBanner
        title="GALLERY"
        playerImage="/puneri-gallery-desk-banner-s12.png"
      />

      <section className="bg-[#ececec] py-12">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            to="/gallery"
            className="inline-block mb-8 text-[#ff5a00] font-bold hover:underline"
          >
            ← Back to Gallery
          </Link>

          {galleryData?.length > 0 ? (
            galleryData.map((item) => (
              <div key={item.id}>

                {/* TITLE */}
                <div className="flex justify-center mb-12">
                  <div className="bg-[#ff5a00] px-10 py-3">
                    <h2 className="text-white text-3xl font-bold italic uppercase tracking-[3px]">
                      {item.name}
                    </h2>
                  </div>
                </div>

                {/* IMAGES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {item.match_images?.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openModal(item, idx)}
                      className="group cursor-pointer"
                    >
                      <div className="overflow-hidden bg-black">

                        <img
                          src={img}
                          alt={item.name}
                          className="
                            w-full
                            h-[350px]
                            object-cover
                            transition-all
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </div>
                    </div>
                  ))}

                </div>

              </div>
            ))
          ) : (
            <div className="text-center text-2xl font-bold">
              No gallery images found.
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={closeModal}
            className="fixed top-36 right-8 z-[10000] text-white text-6xl hover:text-[#ff5a00]">
            ×
          </button>

          {/* COUNTER */}
          <div className="absolute top-6 left-8 text-white text-xl">
            {index + 1} / {len}
          </div>

          {/* PREV */}
          <button
            onClick={backwIndex}
            className="absolute left-4 md:left-10"
          >
            <IoIosArrowBack className="text-white text-6xl hover:text-[#ff5a00]" />
          </button>

          {/* IMAGE */}
          <img
            src={selectedItem.match_images[index]}
            alt={selectedItem.name}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          {/* NEXT */}
          <button
            onClick={foewIndex}
            className="absolute right-4 md:right-10"
          >
            <IoIosArrowForward className="text-white text-6xl hover:text-[#ff5a00]" />
          </button>

        </div>

        
      )}

      
    </>
  );
};

export default SingleGallery;