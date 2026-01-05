import { HomeWishesInputSchema } from "@repo/common/dto";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { wishQueryOptions } from "@/feature/wish/options";
import { useAppForm } from "@/hooks/_formHooks";

const homeRouteApi = getRouteApi("/_home/home");

const useSearchAndFilter = () => {
  const navigate = homeRouteApi.useNavigate();
  const { search, categoryId } = homeRouteApi.useSearch();

  const form = useAppForm({
    defaultValues: {
      search: search || undefined,
      categoryId: categoryId || "All",
    },
    validators: {
      onSubmit: HomeWishesInputSchema.pick({
        search: true,
        categoryId: true,
      }).required(),
    },
    onSubmit: ({ value }) => {
      navigate({
        search: {
          search: value.search || undefined,
          categoryId: value.categoryId === "all" ? undefined : value.categoryId,
        },
      });
    },
  });

  return form;
};

export default function WishSearchAndFilter() {
  const { data: categories } = useSuspenseQuery(wishQueryOptions.getCategories);

  const form = useSearchAndFilter();

  return (
    <form
      className="flex w-full max-w-lg gap-3 self-center py-5"
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField
        listeners={{
          onChange: () => {
            form.handleSubmit();
          },
          onChangeDebounceMs: 500,
        }}
        name="search"
      >
        {(field) => <field.TextField label="" placeholder="Search" />}
      </form.AppField>
      <form.AppField
        listeners={{
          onChange: () => {
            console.log("categoryId changed");
            form.handleSubmit();
          },
        }}
        name="categoryId"
      >
        {(field) => (
          <field.SelectField
            className="w-1/3"
            items={[
              { label: "All", value: "all" },
              ...categories.map((categories) => ({
                label: categories.name,
                value: categories._id,
              })),
            ]}
            label=""
          />
        )}
      </form.AppField>
    </form>
  );
}
