import React from "react";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryH1,
  GalleryH2,
  GalleryP,
} from "./GalleryElement";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
import "../../images/PrviAuto/E36M50.jpg";

const Gallery = () => {
  const veliki = [
    {
      original: require("../../images/TrinaestiAuto/E30.jpg"),
      description:
        "E30 316i-325i Veliki atest (motor, pogon, ovjes, kočnice, povezivači muldi, gewinde)",
    },
    {
      original: require("../../images/TrinaestiAuto/E30-1.jpg"),
      description:
        "E30 316i-325i Veliki atest (motor, pogon, ovjes, kočnice, povezivači muldi, gewinde)",
    },
    {
      original: require("../../images/TrinaestiAuto/E30-2.jpg"),
      description:
        "E30 316i-325i Veliki atest (motor, pogon, ovjes, kočnice, povezivači muldi, gewinde)",
    },
    {
      original: require("../../images/PetiAuto/E30CAB.jpg"),
      description:
        "E30 318i-325i Veliki atest (motor, pogon, ovjes, kočnice, felge)",
    },
    {
      original: require("../../images/PetiAuto/E30CAB2.jpg"),
      description:
        "E30 318i-325i Veliki atest (motor, pogon, ovjes, kočnice, felge)",
    },

    {
      original: require("../../images/PrviAuto/E36M50.jpg"),
      description:
        "E36 318i - 325i Veliki atest (motor, pogon, ovjes, kočnice, felge)",
    },
    {
      original: require("../../images/PrviAuto/E36M502.jpg"),
      description:
        "E36 318i - 325i Veliki atest (motor, pogon, ovjes, kočnice, felge)",
    },
    {
      original: require("../../images/PrviAuto/E36M503.jpg"),
      description:
        "E36 318i - 325i Veliki atest (motor, pogon, ovjes, kočnice, felge)",
    },
    {
      original: require("../../images/CetvrtiAuto/E36C.jpg"),
      description:
        "E36 Compact 316i-323ti Veliki atest (motor, pogon, ovjes, kočnice, felge, pletene kočnice)",
    },
    {
      original: require("../../images/CetvrtiAuto/E36C2.jpg"),
      description:
        "E36 Compact 316i-323ti Veliki atest (motor, pogon, ovjes, kočnice, felge, pletene kočnice)",
    },
    {
      original: require("../../images/DvanaestiAuto/Golf1.jpg"),
      description: "Golf 1 Cabrio Veliki atest (motor, pogon, kočnice, felge)",
    },
    {
      original: require("../../images/DvanaestiAuto/Golf1T.jpg"),
      description: "Golf 1 Cabrio Veliki atest (motor, pogon, kočnice, felge)",
    },
    {
      original: require("../../images/DrugiAuto/E91320d.jpg"),
      description:
        "E91 320D Veliki atest (branici, blatobrani, hauba, prednja i zadnja svjetla, auspuh)",
    },

    {
      original: require("../../images/SestiAuto/E46.jpg"),
      description:
        "E46 320d-330d Veliki atest (motor, pogon ovjes, kočnice, felge)",
    },
    {
      original: require("../../images/SestiAuto/E461.jpg"),
      description:
        "E46 320d-330d Veliki atest (motor, pogon ovjes, kočnice, felge)",
    },

    {
      original: require("../../images/OsmiAuto/F30.jpg"),
      description:
        "F30 320d Veliki atest (M performance paket, opruge, prednji svjetla)",
    },
  ];

  const mali = [
    {
      original: require("../../images/DevetiAuto/E30.jpg"),
      description: "E30 Touring 324td Mali atest (felge, IS lip, auspuh)",
    },
    {
      original: require("../../images/DesetiAuto/E30.jpg"),
      description: "E30 320i Mali atest (felge)",
    },
    {
      original: require("../../images/SedmiAuto/F30.jpg"),
      description: "F30 320d Mali atest (M performance paket)",
    },
    {
      original: require("../../images/SedmiAuto/F301.jpg"),
      description: "F30 320d Mali atest (M performance paket)",
    },
    {
      original: require("../../images/JedanaestiAuto/E60.jpg"),
      description: "E60 535d Mali atest (felge)",
    },
    {
      original: require("../../images/TreciAuto/SeatLeon.jpg"),
      description: "Seat Leon Mali atest (gewinde, optika)",
    },
  ];

  return (
    <>
      <GalleryContainer>
        <GalleryH1>Galerija atestiranih vozila</GalleryH1>
        <GalleryWrapper>
          <GalleryCard>
            <GalleryH2>Veliki atesti</GalleryH2>
            <GalleryP>Veliki atesti sastoje se od...</GalleryP>
            <ImageGallery
              items={veliki}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
            />
          </GalleryCard>
          <GalleryCard>
            <GalleryH2>Mali atesti</GalleryH2>
            <GalleryP>O njima...</GalleryP>
            <ImageGallery
              items={mali}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
            />
          </GalleryCard>
        </GalleryWrapper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
