/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { APIDOCs } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Features2x2 from "./Features2x2";
import { Collection } from "@aws-amplify/ui-react";
export default function Features2x2Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: APIDOCs,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          SignUp: await item.SignUp,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "Features2x2Collection")}
      {...rest}
    >
      {(item, index) => (
        <Features2x2
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Features2x2>
      )}
    </Collection>
  );
}
