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
      bg-[-0%_0]
      bg-[length:200%_auto]
      no-underline
      transition-[background-position]
      duration-500
      ease-out
      group-hover:bg-[-99.99%_0]"
        >
          {text}
        </span>
      ),
    },
  };
  return (
    <div className="flex items-start bg-white rounded-xl p-12 max-w-xl group">
      <img
        src={(
          details.fields.projectLogo as unknown as Asset
        )?.fields?.file?.url?.toString()}
        className="group-hover:hidden"
      />
      <img
        src={(
          details.fields.projectLogoColour as unknown as Asset
        )?.fields?.file?.url?.toString()}
        className="hidden group-hover:block"
      />
      <div className="flex flex-col ml-12">
        {documentToReactComponents(
          details.fields.quote as unknown as Document,
          options
        )}

        <div className="flex items-center mt-12">
          <img
            src={(
              details.fields.profilePicture as unknown as Asset
            )?.fields?.file?.url?.toString()}
            className="w-16 rounded-full"
          />
          <div className="flex flex-col ml-4">
            <span className="text-sm font-bold">
              {details.fields.name.toString()}
            </span>
            <span className="text-grey-80">
              {details.fields.title.toString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
