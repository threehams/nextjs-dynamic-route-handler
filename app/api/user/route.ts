export const GET = () => {
  console.log("called /api/user");

  return Response.json({ username: "pork" });
};

export const dynamic = "force-dynamic";
