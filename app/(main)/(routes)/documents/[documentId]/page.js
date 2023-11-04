"use client";

import Cover from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const DocumentIdPage = ({ params }) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    return <div>Loading...</div>;
  }

  if (document === null) {
    return (
      <div>
        <Cover.Skeleton />
        <div className=""></div>
      </div>
    );
  }
  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
