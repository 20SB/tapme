import { supabase } from "./supabaseClient";

const resolvers = {
    Query: {
        getUser: async (_: any, { id }: { id: string }) => {
            const { data, error } = await supabase
                .from("users")
                .select("id, coins")
                .eq("id", id)
                .single();

            if (error) throw new Error("User not found");
            return data;
        },
    },
    Mutation: {
        addCoins: async (_: any, { id, amount }: { id: string; amount: number }) => {
            const { data, error } = await supabase
                .from("users")
                .update({ coins: supabase.raw(`coins + ${amount}`) })
                .eq("id", id)
                .select();

            if (error) throw new Error("Could not update coins");
            return data[0];
        },
    },
};

export { resolvers };
