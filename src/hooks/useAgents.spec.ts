import { renderHook } from '@testing-library/react'
import { useAgents } from './useAgents';
import { act } from 'react-dom/test-utils';

describe("useAgents", () => {

    it("sets initial agents", () => {

        const initialAgents = [{ name: "one" }, { name: "two" }]

        const { result } = renderHook(() => useAgents(initialAgents))
        expect(result.current.agents).toHaveLength(2);
    });

    it("can set active agent", () => {
        const initialAgents = [{ name: "one" }, { name: "two" }]
        const { result } = renderHook(() => useAgents(initialAgents))

        expect(result.current.agentSelected).not.toBeTruthy()

        act(() => {
            result.current.selectAgent("two");
        })
        expect(result.current.agentSelected).toBeTruthy()
        expect(result.current.activeAgent?.name).toBe("two");
    });

    it("can change active agent", () => {
        const initialAgents = [{ name: "one" }, { name: "two" }]
        const { result } = renderHook(() => useAgents(initialAgents))

        expect(result.current.agentSelected).not.toBeTruthy()

        act(() => {
            result.current.selectAgent("two");
        })
        expect(result.current.activeAgent?.name).toBe("two");

        act(() => {
            result.current.selectAgent("one");
        })
        expect(result.current.activeAgent?.name).toBe("one");
    });
})