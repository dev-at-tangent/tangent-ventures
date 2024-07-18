import type { Entry, Asset } from "contentful";
import type { Endorsement } from "../pages/endorsements.astro";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, type Document } from "@contentful/rich-text-types";

export default function EndorsementCard({
  details,
}: {
  details: Entry<Endorsement>;
}) {
  const options = {
    renderMark: {
      [MARKS.CODE]: (text: React.ReactNode) => (
        <span
          className="font-bold bg-gradient-to-r from-transparent from-50% via-transparent via-50% to-turq to-50%
          sm:bg-[-0%_0]
          sm:bg-[length:200%_auto]
          no-underline
          transition-[background-position]
          duration-500
          ease-out
          group-hover:bg-[-99.99%_0]"
        >
          <mark className="bg-turq sm:bg-transparent">{text}</mark>
        </span>
      ),
    },
  };
  return (
    <div className="flex flex-col sm:flex-row items-start bg-white/30 backdrop-blur-sm rounded-xl p-8 desktop:p-12 max-w-xl group sm:min-h-[450px] transition-colors hover:bg-white">
      <img
        src={(
          details.fields.projectLogo as unknown as Asset
        )?.fields?.file?.url?.toString()}
        className="hidden w-24 sm:block rounded-full group-hover:hidden"
      />
      <img
        src={(
          details.fields.projectLogoColour as unknown as Asset
        )?.fields?.file?.url?.toString()}
        className="w-12 sm:w-24 sm:hidden rounded-full group-hover:block"
      />
      <div className="flex flex-col sm:ml-12 mt-8 sm:mt-0 h-full">
        {documentToReactComponents(
          details.fields.quote as unknown as Document,
          options
        )}
        <div className="grow" />
        <div className="flex items-center mt-12">
          <img
            src={(
              details.fields.profilePicture as unknown as Asset
            )?.fields?.file?.url?.toString()}
            className="w-10 sm:w-16 rounded-full"
          />
          <div className="text-sm sm:text-base flex flex-col ml-4">
            <span className="font-bold">{details.fields.name.toString()}</span>
            <span className="text-grey-80">
              {details.fields.title.toString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
