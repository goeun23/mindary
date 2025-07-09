'use client'
import type { RootState } from "@/store";
import { setDiary } from "@/store/slices/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useState } from "react";

const MAX_CHARACTERS = 1000;

const useDiaryInput = () => {
    const dispatch = useDispatch();
    const diary = useSelector((state: RootState) => state.diary.content);
    const [error, setError] = useState<string | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        
        if (value.length > MAX_CHARACTERS) {
            setError(`최대 ${MAX_CHARACTERS}자까지 입력 가능합니다.`);
            return;
        }
        
        setError(null);
        dispatch(setDiary(value));
    }, [dispatch]);

    return { diary, error, handleChange };
};

function DiaryInput() {
    const { diary, error, handleChange } = useDiaryInput();

    return (
        <div className="mp-6">
            <label htmlFor="diary-input" className="block mb-2 text-sm font-medium text-gray-700">
                일기 작성
            </label>
            <textarea
                id="diary-input"
                className={`w-full min-h-[150px] p-4 border rounded-md resize-none ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="오늘 하루는 어땠나요?"
                value={diary}
                onChange={handleChange}
                aria-invalid={!!error}
                aria-describedby={error ? 'error-message' : undefined}
                maxLength={MAX_CHARACTERS}
            />
            {error && (
                <p id="error-message" className="mt-2 text-sm text-red-500">
                    {error}
                </p>
            )}
            <p className="mt-2 text-sm text-gray-500">
                {diary.length}/{MAX_CHARACTERS}자
            </p>
        </div>
    );
}

export default memo(DiaryInput);