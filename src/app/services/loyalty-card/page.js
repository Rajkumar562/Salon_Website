import { IoMdDisc } from "react-icons/io";

export default function LoyaltyCardPage() {
  return (
    <div className="max-[347px]:pt-[17rem] pt-60 md:pt-48">
      <section className="flex flex-col-reverse lg:flex-row px-10 md:px-20 lg:pl-32 lg:pr-10 gap-5">
        <div>
          <div className="mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl">Eligibility</h1>
            <p className="flex mt-2 text-sm sm:text-base">
              <span className="h-4 w-4 my-auto mr-1">
                <IoMdDisc className="text-yellow" />
              </span>
              You can become a member of the program by availing any service at any branch.
            </p>
          </div>

          <div className="mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl">Points</h1>
            <p className="flex mt-2 text-sm sm:text-base">
              <span className="h-4 w-4 my-auto mr-1">
                <IoMdDisc className="text-yellow" />
              </span>
              10 points for every INR 100 service availed.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl">Points Value</h1>
            <p className="flex mt-2 text-sm sm:text-base">
              <span className="h-4 w-4 my-auto mr-1">
                <IoMdDisc className="text-yellow" />
              </span>
              1 point = ₹ 1
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl">Points Accrual</h1>
            <p className="flex mt-2 text-sm sm:text-base">
              <span className="h-4 w-4 my-auto mr-1">
                <IoMdDisc className="text-yellow" />
              </span>
              Points can be accrued on the In-Salon services only. Points are accrued on every services bill value
              (before taxes).
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl">Points Redemption</h1>
            <p className="flex mt-2 text-sm sm:text-base">
              <span className="h-4 w-4 my-auto mr-1">
                <IoMdDisc className="text-yellow" />
              </span>
              Minimum 250 points have to be accrued before your first redemption
            </p>
          </div>
          <div className="mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl">Points Validity</h1>
            <p className="flex mt-2 text-sm sm:text-base">
              <span className="h-4 w-4 my-auto mr-1">
                <IoMdDisc className="text-yellow" />
              </span>
              The validity of the points is 1 year from the date of issue
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:items-center ">
          <img src="/images/services/loyalty-card.png" alt="Loyalty Card" />
        </div>
      </section>

      <section className="mt-5 px-10 md:px-20 lg:px-32">
        <h1 className="text-xl sm:text-2xl md:text-3xl">
          Z<sup>3</sup> Salon Loyalty Card
        </h1>
        <p className="mt-4 text-sm sm:text-base">
          Every customer&apos;s motive is to get maximum benefits from services that they take and we at Z<sup>3</sup>{" "}
          Salon make sure that our customers are not only satisfied with our services but also with the exclusive
          facilities that we provide them. One such facility that we have for our clients are Loyalty Cards. Loyalty
          Cards is a program through which customers at Z<sup>3</sup> Salon will get the advantage to avail points on
          services that can be used for future services. The loyalty cards is a souvenir for the long term relation with
          our customers as we strive for and want them to come back to us for all the beauty and grooming services.
          <br className="mb-2" /> The Loyalty Cards at Z<sup>3</sup> salon can be used for any services for men and
          women and can be accrued on the In-Salon services only. All you&apos;ve to do is, while getting a makeover at
          the nearest Z<sup>3</sup> Salon; ask for the Loyalty Card service and viola! You are now a member of the
          program. It&apos;s that easy. <br className="mb-2" />
          For every INR 100 service that you avail at any Z<sup>3</sup> salon, you get 10 points and every 1 point is
          equal to INR 1. Moreover, these points can be availed at any branch of the salon chain.
          <br className="mb-2" /> With all the love and trust that our customers have shown in us, we want to make sure
          that in return they get the best of everything, from services to discounts. For more information, please
          contact the nearest Z<sup>3</sup> Salon branch.
        </p>
      </section>
    </div>
  );
}
