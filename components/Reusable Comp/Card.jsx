import Image from "next/image";
import Link from "next/link";
const Card = (props) => {
  return (

    <div className="flex flex-col space-y-3 max-w-card font-poppins">
      <div className="">
        <Image
          src={props.imgSrc}
          width={720}
          height={576}
          quality="100"
          layout="responsive"
          objectFit="cover"
          alt={props.title}
          className="object-left rounded-3xl"
        />
      </div>
      <h1 className="text-lg font-semibold text-card md:text-2xl ">
        {props.title}
      </h1>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <p className="font-medium">
            <Link href={props.caseLink}>
              <a>View Project</a>
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.0001C8.35987 14.0205 6.7367 13.6665 5.254 12.9651C4.10469 12.4043 3.07265 11.6299 2.213 10.6831C1.30243 9.70422 0.585467 8.56176 0.1 7.3161L0 7.0001L0.105 6.6841C0.590815 5.43953 1.30624 4.29737 2.214 3.3171C3.07334 2.37041 4.10504 1.59596 5.254 1.0351C6.73671 0.333689 8.35988 -0.020288 10 0.000100949C11.6401 -0.0202528 13.2633 0.333723 14.746 1.0351C15.8953 1.59584 16.9274 2.37029 17.787 3.3171C18.6993 4.29466 19.4165 5.43747 19.9 6.6841L20 7.0001L19.895 7.3161C18.3262 11.3999 14.3742 14.0694 10 14.0001ZM10 2.0001C6.59587 1.89343 3.47142 3.8752 2.117 7.0001C3.4712 10.1252 6.59579 12.1071 10 12.0001C13.4041 12.1065 16.5284 10.1248 17.883 7.0001C16.5304 3.87368 13.4047 1.89118 10 2.0001ZM10 10.0001C8.55733 10.0097 7.30937 8.99746 7.02097 7.58387C6.73256 6.17029 7.48427 4.75012 8.81538 4.19376C10.1465 3.6374 11.6852 4.10024 12.4885 5.29861C13.2919 6.49698 13.1354 8.09618 12.115 9.1161C11.5563 9.68136 10.7948 9.99967 10 10.0001Z"
              fill="#151517"
            />
          </svg>
          <p className="font-medium">
            <Link href={props.liveLink}>
              <a target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
